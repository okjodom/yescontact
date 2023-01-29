import {nip19} from 'nostr-tools'

export function normalizeURL(raw) {
  let url = new URL(raw)
  return (
    url.origin
      .replace('://m.', '://') // remove known 'mobile' subdomains
      .replace('://mobile.', '://')
      .replace('http://', 'https://') // default everything to https (maybe a terrible idea)
      .replace(
        /:\d+/,
        // remove 443 and 80 ports
        port => (port === ':443' || port === ':80' ? '' : port)
      ) +
    url.pathname
      .replace(/\/+/g, '/') // remove duplicated slashes in the middle of the path
      .replace(/\/*$/, '') // remove slashes from the end of path
  )
}

export function getName(metadata, pubkey) {
  let meta = metadata[pubkey]
  if (meta) {
    if (meta.nip05 && meta.nip05verified) {
      if (meta.nip05.startsWith('_@')) return meta.nip05.slice(2)
      return meta.nip05
    }
    if (meta.name && meta.name.length) return meta.name
  } else if (pubkey) {
    let npub = nip19.npubEncode(pubkey)
    return `${npub.slice(0, 6)}…${npub.slice(-3)}`
  }

  return '_'
}

export function getImage(metadata, pubkey) {
  let meta = metadata[pubkey]
  if (meta) {
    if (meta.picture && meta.picture.length) return meta.picture
  }

  return null
}
