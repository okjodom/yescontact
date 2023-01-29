# yescontact

A Nostr-powered embeddable **Contact Us** widget that just works. Yes, you can contact us! [Privately](https://github.com/nostr-protocol/nips/blob/master/04.md)!

Inspired by [nocomment](https://github.com/fiatjaf/nocomment)

## Usage as an embeddable script

Anywhere in your website you want to have a 'Contact Us' box, include

```
<script src="https://yescontact.netlify.app/embed.js" id="yescontact"></script>
```

You can pass special attributes to that `<script>` tag, such as

- `data-pubkey=""`, a Nostr pubkey where you want to be receive messages. Please use your pubkey, we couldn't guess a default!
- `data-relays='["wss://my.custom.relay", "..."]'`, a JSON list of relay URLs to use instead of the default ones;
- `data-skip="/"`, a path of your website to skip rendering the widgets in. The default is `"/"`.

Custom CSS variables for styling:

```
--nc-background: #003049;
--nc-text-background: #dddddd;
--nc-text-color: #eae2b7;
--nc-text-color-dark: #fcbf49;
--nc-primary-color: #fcbf49;
--nc-primary-contrast: #003049;
```

## Usage as a React component

1. `yarn add react-yescontact`
2. Don't create an account anywhere.
3. Don't configure a database.
4. It just works. The URL is the identifier.

```
import { YesContact } from 'YesContact'

function App() {
  return (
    ...
      <YesContact relays={[
        'wss://nostr.drss.io',
        'wss://nostr-relay.freeberty.net',
        'wss://nostr.unknown.place',
        'wss://nostr-relay.untethr.me',
        'wss://relay.damus.io'
      ]} />
    ...
  );
}
```

## License

Public domain.
