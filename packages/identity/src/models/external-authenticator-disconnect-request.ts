import { ExternalAuthenticators } from './external-authenticators';

/**
 * The External Authenticator Disconnect Request class.
 * @export
 * @interface ExternalAuthenticatorDisconnectRequest
 */
export interface ExternalAuthenticatorDisconnectRequest {
  /**
   * The external authentication provider to disconnect from the user\'s account.
   * @type {ExternalAuthenticators}
   * @memberof ExternalAuthenticatorDisconnectRequest
   */
  authenticator: ExternalAuthenticators;
  /**
   * The identifier assigned to the user by the external provider.
   * @type {string}
   * @memberof ExternalAuthenticatorDisconnectRequest
   */
  provider_user_id: string;
}
