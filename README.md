# Material UI Styles Examples

This next starter app contains the Material UI component examples which also the styles are fetched from the zesty instance style-variables.

[Click Here](https://github.com/zesty-io/module-mui-styles/blob/yaml-module-version/README.md) for more details of **Instance Style Variables** to **Material UI**

## Theme colors:

`Primary` = $\color{#0d6efd}{\textsf{brand-primary}}$ <br>
`Secondary` = $\color{#6c757d}{\textsf{brand-secondary}}$ <br>
`Success` = $\color{#198754}{\textsf{brand-success}}$ <br>
`Info` = $\color{#0dcaf0}{\textsf{brand-info}}$ <br>
`Warning` = $\color{#ffc107}{\textsf{brand-warning}}$ <br>
`Error` = $\color{#dc3545}{\textsf{brand-error}}$ <br>


Using [`sx`](https://mui.com/system/getting-started/the-sx-prop/) prop to apply theme color

```javascript
<Typography sx={{color: "primary.main"}}> Hello World </Typography>
```

Applying theme color directly to [`color`](https://mui.com/material-ui/customization/color/) prop
```javascript
<Typography color="primary.main"> Hello World </Typography>
```

Applying theme colors to a [Typography](https://mui.com/material-ui/api/typography/) component with header variant
```javascript
<Typography variant="h1" color="primary.main"> Hello World </Typography>
```

[Button](https://mui.com/material-ui/react-button/) component with theme colors

```javascript
<Button variant="contained" color="success"> Primary </Button>
```


## Deploying example app to GCP   

1. Setup App web engine services.

## Setup a URL proxy of MUI examples to an instance
1.  Ensure the instance has proxy settings.
![image](https://github.com/b-estevez/example-mui-styles/assets/55866499/3dd79464-317b-4c73-8db9-f594c763f2a7)

- If no proxy settings, kindly create using Instance API settings [/env/createsettings](https://instances-api.zesty.org/#56267a59-88a5-40b0-bd1c-a23de605a6e4)
- Please make sure to create settings with the correct Instance ZUID
- Request body to create settings for both live and stage

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

Created proxy settings will look like this <br>
![image](https://github.com/b-estevez/example-mui-styles/assets/55866499/2ea66ac0-c41d-42a2-b8f9-965e23ca295d)


- Once the proxy settings is created, the webengine will map the proxy URLs to both environments (Stage and Live).
