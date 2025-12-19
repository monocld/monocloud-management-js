/**
 * The Update Private Data Request class.
 * @export
 * @interface UpdatePrivateDataRequest
 */
export interface UpdatePrivateDataRequest {
  /**
   * A structured payload for updating private data. Supports strings, numbers, booleans, arrays, and nested objects.  Fields omitted remain unchanged; fields set to `null` are removed.
   * @type {{ [key: string]: any; }}
   * @memberof UpdatePrivateDataRequest
   */
  private_data: Record<string, any>;
}
