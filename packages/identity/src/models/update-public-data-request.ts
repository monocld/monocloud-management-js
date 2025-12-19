/**
 * The Update Public Data Request class.
 * @export
 * @interface UpdatePublicDataRequest
 */
export interface UpdatePublicDataRequest {
  /**
   * A structured payload for updating public data. Supports strings, numbers, booleans, arrays, and nested objects.  Fields omitted remain unchanged; fields set to `null` are removed.
   * @type {{ [key: string]: any; }}
   * @memberof UpdatePublicDataRequest
   */
  public_data: Record<string, any>;
}
