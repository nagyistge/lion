`import Oauth2 from 'torii/providers/oauth2-code'`
`import {configurable} from 'torii/configuration'`

GithubOauth2 = Oauth2.extend(
  name: 'github-oauth2'
  baseUrl: 'https://github.com/login/oauth/authorize'
  requiredUrlParams: ['state'],
  responseParams: ['code'],
  state: 'STATE'
  redirectUri: configurable('redirectUri', ->
    # A hack that allows redirectUri to be configurable
    # but default to the superclass
    @_super()
  ))

`export default GithubOauth2`
