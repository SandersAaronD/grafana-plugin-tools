# Grafana / Sign Plugin

Sign Grafana plugins with ease.

**ToC**

- [Grafana / Sign Plugin](#grafana--sign-plugin)
  - [Signing a plugin](#signing-a-plugin)
    - [Sign a public plugin](#sign-a-public-plugin)
    - [Sign a private plugin](#sign-a-private-plugin)
      - [`npx`](#npx)
      - [`yarn` (> 2.x)](#yarn--2x)
  - [Contributing](#contributing)

**`@grafana/sign-plugin`** works on macOS, Windows and Linux.<br />
If something doesn’t work, please [file an issue](https://github.com/grafana/plugin-tools/issues/new).<br />
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/grafana/plugin-tools/discussions).

## Signing a plugin

Signing a plugin allows Grafana to verify the authenticity of the plugin with signature verification. This gives users a way to make sure plugins haven’t been tampered with. All Grafana Labs-authored plugins, including Enterprise plugins, are signed.

All plugins require a signature since Grafana 7.0.

Please refer to [Signing plugins documentation](https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/) to understand how to sign a Grafana plugin. The following commands are mentioned here for development purposes.

### Sign a public plugin

In your plugin directory, sign the plugin with your Grafana API key. Grafana sign-plugin creates a MANIFEST.txt file in the dist directory of your plugin.

```bash
export GRAFANA_API_KEY=<YOUR_API_KEY>
npx @grafana/sign-plugin
```

### Sign a private plugin

In your plugin directory, run the following to create a MANIFEST.txt file in the dist directory of your plugin.

```bash
npx @grafana/sign-plugin --rootUrls https://example.com/grafana
```

Alterntives:

#### [`npx`](https://github.com/npm/npx)

```bash
npx @grafana/sign-plugin
```

#### [`yarn`](https://yarnpkg.com/cli/dlx) (> 2.x)

```bash
yarn dlx @grafana/sign-plugin
```

## Contributing

We are always grateful for contribution! See the [CONTRIBUTING.md](../CONTRIBUTING.md) for more information.