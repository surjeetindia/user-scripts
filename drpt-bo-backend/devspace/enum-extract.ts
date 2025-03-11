// test
export const APPLICATION_STATUS = {
  // registration cancelled
  APPLICATION_REJECTED: -2,
  APPLICATION_REJECTED_HR: -3,
  // blocked at emc/hrm
  ACCOUNT_BLOCKED: -1,
  APPLICATION_DEACTIVATED_BY_SYSTEM: -4,

  // step2 registration done
  APPLICATION_REGISTERED: 2,
  PROFILE_LOGGED_IN: 222,

  // step2 registration done and assessment pending
  ASSESSMENT_READY: 3,
  ASSESSMENT_IN_PROGRESS: 4,
  ASSESSMENT_SUBMIT_RESPONSE_AWAITED: 8,
  ASSESSMENT_FAILED_ATTEMPT_LEFT: 7,
  ASSESSMENT_PASSED: 6,
  // assessment failed and no attempt left (lead to acc blocked)
  ASSESSMENT_FAILED_NO_ATTEMPT_LEFT: 5,

  // When mntc account created and linked to profile
  TRAINING_READY: 17,
  // user hits continue to training button
  TRAINING_INITIATED: 9,
  // user hits goto mindtickle button
  TRAINING_INITIATED_BY_USER: 18,
  // progress of any module received from mindtickle
  TRAINING_IN_PROGRESS: 10,
  // waiting for certificate to be synced
  TRAINING_PASSED: 11,
  TRAINING_FAILED_ATTEMPT_LEFT: 12,
  // training failed after grace period (lead to acc blocked)
  TRAINING_FAILED_NO_ATTEMPT_LEFT: 13,

  // iff training passed
  NICK_NAME_SELECTION: 14,
  WORK_HOURS_SELECTION: 15,
  TRAINING_TUTORIAL_WATCHED: 19,
  TRAINING_ONBOARDING: 20,
  CONTRACT_PENDING: 31,
  CONTRACT_ON_GOING: 32,
  CONTRACTED: 33,
  TERMINATED: 34,
};
const a = Object.entries(APPLICATION_STATUS);
console.log(a);

const b: any[] = [];
a.forEach(item => {
  const [k, v] = item;
  if (typeof v === 'number') {
    b.push({
      name: k,
      id: v,
    });
  }
});
console.log(b);
