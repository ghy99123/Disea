import { Result, post } from "../../../withAxios";

// send friend invitation
export const sendFriendInvitation = async function (
  targetEmailAddress: string
): Promise<Result<string>> {
  return await post<string>(`/friend-invitation/invite`, {
    targetEmailAddress,
  });
};

export const acceptFriendInvitation = async function (id: string) {
  return await post<any>(`/friend-invitation/accept`, {
    id,
  });
};

export const rejectFriendInvitation = async function (id: string) {
  return await post<any>(`/friend-invitation/reject`, { id });
};
