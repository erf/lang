# lang

Tiny language translation lib for Javascript

## API

`lang` - initialize given a translation object - returns API.

`tr` - get translation given a tag with optional parameters.

`setLang` - set the current language given language code.


## Example

Initialize using `lang` given a translation object.

```Javascript
lang(translation)
```

Use `setLang` to change language and `tr` to get translation.

```Javascript
// set langauge given code
setLang('en')

// get translation given a tag and current code
tr('car')

// get translation given a tag and additional parameter
tr('hi', 'Erlend')
```

See [example.html](example.html)


## Translation format

We initialize using `lang` with a `translation` object, given language codes as keys and a `tag` per translation.

You can add parameters to your translations using `{}`.

```Javascript
    const translations = {
        'en': {
            'car': 'car',
            'hi': 'Hi {}, how are you doing?',
        },
        'nb': {
            'car': 'bil',
            'hi': 'Hei {}, hvordan går det?',
        },
    }
```