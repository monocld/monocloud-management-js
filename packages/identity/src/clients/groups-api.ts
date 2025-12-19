import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import { CreateGroupRequest, Group, PatchGroupRequest } from '../models';

export class GroupsClient extends MonoCloudClientBase {
  /**
   * Retrieves a paginated list of groups. Optional query parameters allow searching, filtering, and sorting the results.
   * @summary List all groups
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of groups to return per page. The maximum allowed value is 50.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending.  Supported fields include - name, type, clients_assigned, users_assigned, last_assigned, creation_time, last_updated.
   * @returns Group[] - The groups were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public getAllGroups(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Group[]>> {
    const url = `/groups`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<Group[]>(request);
  }

  /**
   * Creates a new group that can be referenced in access policies, role assignments or user membership management.
   * @summary Create a group
   * @param {CreateGroupRequest} createGroupRequest The create group request
   * @returns Group - Group was created successfully
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public createGroup(
    createGroupRequest: CreateGroupRequest
  ): Promise<MonoCloudResponse<Group>> {
    const url = `/groups`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createGroupRequest;

    return this.processRequest<Group>(request);
  }

  /**
   * Retrieves detailed information for the specified group.
   * @summary Retrieve a group
   * @param {string} groupId The unique identifier of the group
   * @returns Group - The group was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public findGroupById(groupId: string): Promise<MonoCloudResponse<Group>> {
    const url = `/groups/{group_id}`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Group>(request);
  }

  /**
   * Permanently removes the specified group. Users who are members of this group will no longer be associated with it after deletion.
   * @summary Delete a group
   * @param {string} groupId The unique identifier of the group to delete
   * @returns The group was deleted successfully
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public deleteGroup(groupId: string): Promise<MonoCloudResponse<null>> {
    const url = `/groups/{group_id}`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * Applies a partial update to the specified group. Only fields provided in the request are updated; all other fields remain unchanged.
   * @summary Update a group
   * @param {string} groupId The unique identifier of the group
   * @param {PatchGroupRequest} patchGroupRequest The update group request.
   * @returns Group - The group was updated successfully
   * @throws {MonoCloudException}
   * @memberof GroupsClient
   *
   */
  public patchGroup(
    groupId: string,
    patchGroupRequest: PatchGroupRequest
  ): Promise<MonoCloudResponse<Group>> {
    const url = `/groups/{group_id}`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchGroupRequest;

    return this.processRequest<Group>(request);
  }
}
