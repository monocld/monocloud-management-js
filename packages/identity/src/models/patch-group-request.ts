/**
 * The Patch Group class.
 * @export
 * @interface PatchGroupRequest
 */
export interface PatchGroupRequest {
  /**
   * The display name of the group.
   * @type {string}
   * @memberof PatchGroupRequest
   */
  name?: string;
  /**
   * Optional description that indicates the purpose or role of the group.
   * @type {string}
   * @memberof PatchGroupRequest
   */
  description?: string | null;
  /**
   * Indicates whether new users are automatically assigned to this group upon sign-up.
   * @type {boolean}
   * @memberof PatchGroupRequest
   */
  is_auto_assigned?: boolean;
}
