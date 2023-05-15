# Material UI Styles Examples

This nextjs app contains the Material UI component examples which makes use of the style variables fetched from a Zesty instance.

This example uses the [MUI style settings module](https://github.com/zesty-io/module-mui-styles). After the module has been installed to your instance, you can make use of the style variables imported and edited within the Manager interface.

## Theme colors:

`Primary` = $\color{#0d6efd}{\textsf{brand-primary}}$ <br>
`Secondary` = $\color{#6c757d}{\textsf{brand-secondary}}$ <br>
`Success` = $\color{#198754}{\textsf{brand-success}}$ <br>
`Info` = $\color{#0dcaf0}{\textsf{brand-info}}$ <br>
`Warning` = $\color{#ffc107}{\textsf{brand-warning}}$ <br>
`Error` = $\color{#dc3545}{\textsf{brand-error}}$ <br>

Using [`sx`](https://mui.com/system/getting-started/the-sx-prop/) prop to apply theme color

```javascript
<Typography sx={{ color: "primary.main" }}> Hello World </Typography>
```

Applying theme color directly to [`color`](https://mui.com/material-ui/customization/color/) prop

```javascript
<Typography color="primary.main"> Hello World </Typography>
```

Applying theme colors to a [Typography](https://mui.com/material-ui/api/typography/) component with header variant

```javascript
<Typography variant="h1" color="primary.main">
  {" "}
  Hello World{" "}
</Typography>
```

[Button](https://mui.com/material-ui/react-button/) component with theme colors

```javascript
<Button variant="contained" color="success">
  {" "}
  Primary{" "}
</Button>
```

## Deploying

This example makes use of GCP's App Engine service. You can use any solution you would like to host your app build.

1. Setup a new App Engine service.
2. Run your app build then deploy to your AE service.
3. Copy the generated app URL.

## Setup proxy settings in Zesty

1.  In your instance settings, check that you have proxy settings installed. The below screenshot shows that this instance does not have the settings installed. We will now walk through the installation process.
    ![image](https://github.com/b-estevez/example-mui-styles/assets/55866499/3dd79464-317b-4c73-8db9-f594c763f2a7)

- Use Zesty's Instance API [Create Setting](https://instances-api.zesty.org/#56267a59-88a5-40b0-bd1c-a23de605a6e4) endpoint
- Note that you will need to be [authenticated](https://auth-api.zesty.org/#28b40e26-196b-4283-a483-40a5b537bc22) and you will need to use your instance's ZUID (begins with an 8- ) to make this request.
- The following request payoloads are used to create settings for both live and stage. Be sure to replace the value object with your app's hosted URL.

Dev / Stage

```json
{
  "category": "proxy",
  "keyFriendly": "Proxy Dev URL",
  "key": "dev",
  "value": "YOUR BUCKET URL",
  "admin": false,
  "parselyAccess": false,
  "dataType": "text",
  "options": null,
  "tips": "Root URL to proxy file store"
}
```

Live

```json
{
  "category": "proxy",
  "keyFriendly": "Proxy Live URL",
  "key": "live",
  "value": "YOUR BUCKET URL",
  "admin": false,
  "parselyAccess": false,
  "dataType": "text",
  "options": null,
  "tips": "Root URL to proxy file store"
}
```

We can now see the proxy settings in the instance. <br>
![image](https://github.com/b-estevez/example-mui-styles/assets/55866499/2ea66ac0-c41d-42a2-b8f9-965e23ca295d)

- Once the proxy settings is created and the url values are added, Webengine will map the proxy URLs to both environments (Stage and Live).
- You can now use your instance's configured domains to view your app's content. More on proxying content can be found [here](https://zesty.org/services/web-engine/file-proxy).
