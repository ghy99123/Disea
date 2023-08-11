import { Result, post } from "../../../withAxios";

// send friend invitation
export const sendFriendInvitation = async function (
  targetEmailAddress: string
): Promise<Result<string>> {
  return await post<string>(`/friend-invitation/invite`, {
    targetEmailAddress,
  });
};
