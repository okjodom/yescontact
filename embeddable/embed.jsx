import React from 'react'
import {createRoot} from 'react-dom/client'
import {YesContact} from '../lib/index.js'

const script = document.getElementById('yescontact')

const receiverPublicKey = script.dataset.pubkey;

const relays = script.dataset.relays
  ? JSON.parse(script.dataset.relays)
  : [
      'wss://nostr.zebedee.cloud',
      'wss://nostr.fmt.wiz.biz',
      'wss://nostr-pub.wellorder.net',
      'wss://nostr-relay.untethr.me',
      'wss://relay.damus.io'
    ]
const skip = script.dataset.skip || '/'

const container = document.createElement('div')
container.style.width = '100%'
script.parentNode.insertBefore(container, script)

const root = createRoot(container)
root.render(<YesContact receiverPublicKey={receiverPublicKey} relays={relays} skip={skip} />)
