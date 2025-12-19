/**
 * The Unblock IP Request class.
 * @export
 * @interface UnblockIpRequest
 */
export interface UnblockIpRequest {
  /**
   * The IP address to unblock. Use `all` to reset lockouts for every IP currently associated with the user.
   * @type {string}
   * @memberof UnblockIpRequest
   */
  ip_address: string;
}
