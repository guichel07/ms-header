# ms-header-tek

![npm version](https://img.shields.io/npm/v/ms-header-tek)
![license](https://img.shields.io/npm/l/ms-header-tek)

A lightweight **Vanilla TypeScript** component that renders a header into any DOM element.

## Installation

```bash
npm install ms-header-tek
```

## Usage

```ts
import { Header } from 'ms-header-tek';

const mountPoint = document.getElementById('header') as HTMLElement;

const header = new Header(mountPoint);
header.render();
```

## API

### `new Header(mountPoint: HTMLElement)`

Creates a new `Header` instance.

| Parameter    | Type          | Description                                              |
|--------------|---------------|----------------------------------------------------------|
| `mountPoint` | `HTMLElement` | The DOM element where the header will be rendered        |

### `render(): void`

Injects the header HTML into the mount point element.

**Result:**

```html
<header>
  <span class="text-lg">Mon Header</span>
</header>
```

## Example

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="header"></div>

    <script type="module">
      import { Header } from 'ms-header-tek';

      const mountPoint = document.getElementById('header');
      const header = new Header(mountPoint);
      header.render();
    </script>
  </body>
</html>
```

## Requirements

- Vanilla TypeScript / JavaScript
- A DOM environment (browser)

## License

MIT
