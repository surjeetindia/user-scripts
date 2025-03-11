// One more thing that I feel is, the content of the mail in the ticket doesn't fit for 3day reminder for not completing the 2 modules.
export const SPV1 = {
  _digest: (...args: any) => typeof args,
  _absorber: (...args: any) => console.log(args),
  _override: (obj: any, key: any, value: any) => (obj[key] = value),

  // fetchUserDetailsFromGoogle
  // SPV1.absorber(code, dev, isCodeForLogin, typeof this.exchangeCodeForToken, typeof this.getGoogleUserDetails);
  // return SPV1.FETCH_GMAIL_USER_INFO;

  EMC_UPDATE: {
    users: {
      '265222': {
        name: 'Ravi Kaushik',
        mindtickleId: '6b5eb189ee218',
        // mindtickleId: null,
        drpProfileID: '51643',
        id: '265222',
        emcId: '265222',
        login: 'rk190',
        displayName: 'rk190',
        teamId: '1182',
        isActive: '1',
        location: {
          id: 24,
          name: 'drp',
          label: 'DRP',
        },
        hrmId: null,
        sfId: null,
        createTime: '2025-02-10 08:42:36',
        sourceId: '265222',
        employeeId: '70005',
        dmsId: null,
        statusId: '2',
        sfUserId: null,
        msId: null,
        hasAccountInBackOffice: false,
        gender: 'Male',
        accountType: null,
        jiraEmail: [],
        position: {
          department: null,
          occupation: null,
          hrmEmployerId: null,
          hrmPosition: null,
          sapPosition: null,
          drpPosition: {
            id: 1,
            name: 'Independent Travel Manager',
          },
          drpDepartment: {
            id: 1,
            name: 'Independent Travel Manager',
          },
        },
        phones: [
          {
            uid: 'LTODVPTDNKJ',
            mask: '9189******97',
            isPrimary: true,
            type: 'mobile',
          },
        ],
        photos: [],
        groups: [],
        roles: [],
        settings: {
          startWorkOnFloorDt: '2025-02-07 00:00:00',
          isTGAgent: '1',
        },
        companySettings: {
          Training: {
            voipDirect: null,
          },
          Personal: {
            email: {
              uid: '2MBDCMD8XWP',
              mask: 'trr**********@gmail.com',
            },
            defaultEmail: true,
            voipDirect: null,
          },
        },
        availableCompanies: {
          '32': 'Training',
        },
        projectGroups: [],
        devices: [],
        project_id: 362,
        project_name: 'DRPT',
      },
    },
  },

  GMAIL_USER_INFO_BY_ACCESS_TOKEN: {
    firstName: 'Surjeet',
    lastName: 'Soni',
    // email: 'surjeetindia@gmail.com',
    email: 'surjeet306061739@gmail.com',
    accessToken: 'cec133b1eef0482e1e4fdde9322b278892887f78794fc9cccc0dcf35820e901b',
  },

  CREATE_PROFILE_ERROR: {
    error: true,
    profileId: null,
    message: 'profile data found ineligible',
    errorData: {
      email: {
        status: 'APPLICANT',
        src: 'DRPT',
        id: 2,
        data: {
          firstName: 'surjeet',
          lastName: 'pubUser',
        },
      },
    },
  },

  CREATE_PROFILE_ERROR1: {
    error: true,
    profileId: null,
    message: 'profile data found ineligible',
    errorData: {
      email: {
        status: 'APPLICANT',
        src: 'DRPT',
        id: 1,
        data: {
          firstName: 'surjeet',
          lastName: 'pubUser',
        },
      },
      phone: {
        status: 'APPLICANT',
        src: 'DRPT',
        id: 1,
        data: {
          firstName: 'surjeet',
          lastName: 'pubUser',
        },
      },
    },
  },

  CREATE_PROFILE_SUCCESS: {
    error: false,
    profileId: 4,
    message: 'Profile created successfully',
    res: {
      profileId: 4,
      appId: 4,
      firstName: 'surjeet',
      middleName: '',
      lastName: 'pubUser',
      fullName: 'surjeet  pubUser',
      attemptNo: 1,
      provider: 'GOOGLE',
      emailUid: '93DJMWWELZL',
      phoneUid: 'D2M4TZNVR9I',
      statusId: 2,
      statusText: 'APPLICATION_REGISTERED',
    },
  },

  PROFILE: {
    isActive: true,
    profileId: 6,
    userApplicationId: 3,
    appStatusId: 2,
    appStatusText: 'REGISTERED',
    profileState: {
      id: 1,
      name: 'applicant',
    },
    position: {
      id: 1,
      name: 'Global Travel Agent',
    },
    photoPrivate: true,
    origin: {
      originId: 2,
      originText: 'PUB',
    },
    profile: {
      firstName: 'test310200113',
      middleName: null,
      lastName: 'test',
      fullName: 'test310200113 test',
      dob: null,
      birthPlace: null,
      description: null,
      createdAt: '2023-10-19T19:44:05.363Z',
      updatedAt: '2023-10-19T19:44:05.363Z',
      terminatedAt: null,
    },
    mntc: {},
    blacklist: {
      isBlacklisted: null,
      blacklistedAt: null,
      blacklistReason: null,
    },
    rejection: {
      rejectedAt: null,
      rejectReasonId: null,
      rejectReason: null,
      rejectComment: null,
    },
    userAddress: {
      address: [null],
      city: {
        id: 131,
        originalName: 'Hakupu',
        name: 'Hakupu',
        cityCode: 'NU-HAAAD',
        state: null,
      },
      country: {
        id: 171,
        name: 'Niue',
        originalName: 'Niue',
        iso: 'NU',
        iso3: 'NIU',
        isoNumeric: 570,
        phoneCountryCode: '683',
      },
    },
    professionalData: {
      educationLevel: {
        id: 2,
        name: 'Professional',
      },
      experienceLevel: {
        id: 2,
        name: '<1 year',
      },
      languages: [
        {
          profileId: 6,
          languageId: 5,
          languageLevelId: 1,
          language: {
            id: 5,
            name: 'Afrikaans',
            code: 'afr',
            iso: null,
          },
        },
        {
          profileId: 6,
          languageId: 37,
          languageLevelId: 1,
          language: {
            id: 37,
            name: 'Breton',
            code: 'bre',
            iso: null,
          },
        },
      ],
      skills: [
        {
          profileId: 6,
          skillId: 1,
          skill: {
            id: 1,
            name: 'Account Management',
          },
        },
        {
          profileId: 6,
          skillId: 2,
          skill: {
            id: 2,
            name: 'Accounting',
          },
        },
        {
          profileId: 6,
          skillId: 3,
          skill: {
            id: 3,
            name: 'Analytical Skills',
          },
        },
        {
          profileId: 6,
          skillId: 4,
          skill: {
            id: 4,
            name: 'Banking',
          },
        },
      ],
    },
    contacts: {
      emails: [
        {
          uid: '4YVIK0W4JHF',
          value: 'gmail310200113@gmail.com',
        },
      ],
      phones: [
        {
          uid: '0P8XCZPSV64',
          value: '919310200113',
        },
      ],
    },
    assessments: [],
    userApplications: [
      {
        applicationId: 3,
        rejectedAt: null,
        rejectedReasonId: null,
        rejectedComments: null,
        originId: 2,
        originText: 'PUB',
        advertiserId: 5,
        advertiserName: 'local-dev',
        statusId: 2,
        statusText: 'REGISTERED',
        createdAt: '2023-10-19T19:44:05.363Z',
        updatedAt: '2023-10-19T19:44:05.363Z',
      },
    ],
    users: [],
    contract: {},
    emcName: null,
  },

  EMC_AUTHORIZE_TOKEN: {
    sessionKey: 'c4f0cccd88c2eb5d2afd8900711d1bf4',
    companyGroupIds: ['2'],
    project: 'Pub',
    redirectUrl: null,
    user: {
      name: 'Ankit Bansal',
      id: '108478',
      emcId: '108478',
      login: 'a.bansal',
      teamId: '2014',
      drpProfileID: '3',
      // mindtickleId: '158ae9ec677de000',
      location: {
        id: 37,
        name: 'DRPrezerv',
        label: 'DRP2',
      },
      hrmId: null,
      sfId: null,
      displayName: 'a.bansal',
      isActive: '1',
      createTime: '2021-03-18 09:10:01',
      sourceId: '108478',
      employeeId: '40864',
      dmsId: null,
      statusId: '2',
      sfUserId: null,
      msId: null,
      hasAccountInBackOffice: false,
      gender: 'Male',
      accountType: null,
      jiraEmail: [],
      position: {
        department: {
          id: '44',
          name: 'Finances',
          label: 'Finances',
        },
        occupation: null,
        hrmEmployerId: null,
        hrmPosition: {
          id: 3,
          name: 'QA Specialist',
          label: 'Travel CAI QA Specialist',
          hrmEmployerId: null,
        },
        sapPosition: null,
        drpPosition: null,
        drpDepartment: null,
      },
      phones: [
        {
          uid: 'BW6QRLZNQXN',
          mask: '9199******61',
          isPrimary: true,
          type: 'mobile',
        },
      ],
      photos: [],
      groups: [
        {
          id: 5986,
          name: 'Developer',
          project: true,
        },
      ],
      roles: ['platform_admin', 'applicant_admin', 'freelancer_admin', 'login'],
      settings: {
        startWorkOnFloorDt: '2021-03-18 00:57:47',
        ageInMonths: '26',
        canView: ['1', '2009', '2053', '2103'],
        isTGAgent: '1',
      },
      companySettings: {
        SLT: {
          voipDirect: null,
        },
        ITN: {
          voipDirect: null,
        },
        UK: {
          voipDirect: null,
        },
        CA: {
          voipDirect: null,
        },
        BOG: {
          voipDirect: null,
        },
        ME: {
          voipDirect: null,
        },
        PH: {
          voipDirect: null,
        },
        Training: {
          voipDirect: null,
        },
        DXF: {
          voipDirect: null,
        },
        MNL: {
          voipDirect: null,
        },
        Vacation: {
          voipDirect: null,
        },
        Africa: {
          voipDirect: null,
        },
        DEL: {
          voipDirect: null,
        },
        ASIA: {
          voipDirect: null,
        },
        Oojo: {
          defaultEmail: true,
          voipDirect: null,
        },
      },
      availableCompanies: {
        '2': 'SLT',
        '3': 'ITN',
        '11': 'UK',
        '22': 'CA',
        '24': 'BOG',
        '26': 'ME',
        '28': 'PH',
        '32': 'Training',
        '46': 'DXF',
        '56': 'MNL',
        '58': 'Vacation',
        '60': 'Africa',
        '62': 'DEL',
        '64': 'ASIA',
        '66': 'Oojo',
      },
      projectGroups: [],
    },
  },

  MNTC: {
    TRAINING_PERFORMANCE: {
      '1881980917288460288': [
        {
          id: '1776227665558674326',
          name: 'Certification series',
          desc: null,
          // status: 'Pending',
          status: 'In Progress',
          duration: 20,
          percentCompleted: 0,
          isDefault: true,
          lastSyncedAt: '2025-01-21T10:36:58.684Z',
          totalModules: 25,
          moduleStatus: [
            {
              status: 'Not started',
              count: 23,
              modules: [
                {
                  id: '1776228430428858135',
                  name: 'Industry Know How',
                  isCritical: false,
                  so: 2,
                },
                {
                  id: '1876177604682228623',
                  name: 'Product Overview',
                  isCritical: false,
                  so: 3,
                },
                {
                  id: '1776228494753104974',
                  name: 'Video Assessment - Communication Interview',
                  isCritical: false,
                  so: 5,
                },
                {
                  id: '1776228368812131840',
                  name: 'Airline Insider - Reading itineraries',
                  isCritical: false,
                  so: 6,
                },
                {
                  id: '1776228320206450274',
                  name: 'Mission 1: Flight Presentation',
                  isCritical: false,
                  so: 8,
                },
                {
                  id: '1776228300469834833',
                  name: 'Asaptickets.com',
                  isCritical: false,
                  so: 9,
                },
                {
                  id: '1776227830942223533',
                  name: 'Request journey A to Z',
                  isCritical: false,
                  so: 10,
                },
                {
                  id: '1776228281027008101',
                  name: 'Client Orientation 101',
                  isCritical: false,
                  so: 11,
                },
                {
                  id: '1776228256400578923',
                  name: 'Intro to client handling workflow',
                  isCritical: false,
                  so: 12,
                },
                {
                  id: '1776228236861747635',
                  name: 'Intro to CMS: Creating a new Travel Request',
                  isCritical: false,
                  so: 13,
                },
                {
                  id: '1776228212174227967',
                  name: 'Client Orientation - Greetings',
                  isCritical: false,
                  so: 14,
                },
                {
                  id: '1776228148459686083',
                  name: 'Soft Skills - First call',
                  isCritical: false,
                  so: 15,
                },
                {
                  id: '1776228120046323038',
                  name: 'First Call FAQs',
                  isCritical: false,
                  so: 16,
                },
                {
                  id: '1776228098910021457',
                  name: 'Client Orientation - Finishing a call',
                  isCritical: false,
                  so: 17,
                },
                {
                  id: '1776227746904569926',
                  name: 'First call simulation',
                  isCritical: false,
                  so: 19,
                },
                {
                  id: '1776228045362360009',
                  name: 'Pro Quote - Basics',
                  isCritical: false,
                  so: 20,
                },
                {
                  id: '1776228013497345121',
                  name: 'Price Quote',
                  isCritical: false,
                  so: 21,
                },
                {
                  id: '1776227986566825373',
                  name: 'WhatsApp, SMS, Facebook - How to use?',
                  isCritical: false,
                  so: 22,
                },
                {
                  id: '1776227854896457486',
                  name: 'Follow up basics',
                  isCritical: false,
                  so: 23,
                },
                {
                  id: '1776227966911083372',
                  name: 'How to leave the best voice message?',
                  isCritical: false,
                  so: 24,
                },
              ],
            },
            {
              status: 'In progress',
              count: 0,
              modules: [],
            },
            {
              status: 'In review',
              count: 0,
              modules: [],
            },
            {
              status: 'Done',
              count: 1,
              modules: [
                {
                  id: '1776228518519777609',
                  name: 'Certification course Introduction',
                  desc: '',
                  isCritical: false,
                  status: 'Done',
                  result: 'Pass',
                  percentScore: 50.56,
                  score: 910,
                  maxScore: 1800,
                  so: 1,
                },
                {
                  id: '507999385687172797',
                  name: 'Knowledge Test Nr.1',
                  so: 4,
                  desc: '',
                  isCritical: false,
                  status: 'Done',
                  result: 'Pass',
                  percentScore: 50.56,
                  score: 910,
                  maxScore: 1800,
                },
                {
                  id: '507999359799977001',
                  name: 'Knowledge Test Nr. 2',
                  isCritical: false,
                  so: 7,
                  status: 'Done',
                  result: 'Pass',
                  percentScore: 50.56,
                  score: 910,
                  maxScore: 1800,
                },
                {
                  id: '507999250731259134',
                  name: 'Knowledge test Nr. 3',
                  isCritical: false,
                  so: 18,
                },
                {
                  id: '514523349993434777',
                  name: 'General Knowledge Test',
                  isCritical: false,
                  so: 25,
                  status: 'Done',
                  result: 'Pass',
                  percentScore: 50.56,
                  score: 910,
                  maxScore: 1800,
                },
              ],
            },
          ],
        },
      ],
    },

    TRAINING_PERFORMANCE_PRELIVE: {
      '1811715108731371520': [
        {
          id: '1526899855350414157',
          name: 'Certification series',
          desc: null,
          status: 'In Progress',
          prelive: true,
          duration: 20,
          percentCompleted: 0,
          isDefault: true,
          lastSyncedAt: '2024-08-04T20:15:53.275Z',
          moduleStatus: [
            {
              status: 'Not started',
              count: 16,
              modules: [
                {
                  id: '1783467441075330027',
                  name: 'Day 1 Pre live',
                  desc: 'Welcome to your first day of our Pre Live Training. During this course, please watch attentively all videos. Later you will be asked to pass an assessment and submit a Mission based on those videos. ',
                  isCritical: false,
                  so: 32,
                },
                {
                  id: '510895133688896624',
                  name: 'Day 1 Pre Live. Assessment',
                  desc: 'All questions are based on Day 1 Pre live course.',
                  isCritical: false,
                  so: 33,
                },
                {
                  id: '1808789777141753825',
                  name: 'Day 1 Pre Live Practical Mission Final',
                  desc: 'Please follow the instructions.Instructions: After watching the video, go to slides attached below.For each slide, please comment on the action. What agent is doing?Note that the screenshots from the slides are from the attached video, inserted in the same order.',
                  isCritical: false,
                  so: 34,
                },
                {
                  id: '1550435352463894161',
                  name: 'Request Handling Tips',
                  desc: '',
                  isCritical: false,
                  so: 35,
                },
                {
                  id: '1635957078405747906',
                  name: 'Assessment: Hardware & Software ',
                  desc: 'Dear future Independent Travel Manager, You have come a long way, and we congratulate you on coming to this place. Another step on this journey ahead.We at DreamPort put the customer as Priority and Focus Nr. 1 - that is why it is so important that you not only have the Knowledge, but also the tools to provide excellent service. To maintain conversations with clients, and be able to work in all systems you will need for service provision, you will need to comply with requirements, that were introduced in the beginning of the application process. Requirements: Processor: CPU with benchmark score of 5000 or higher. CPU scores available here:https://www.cpubenchmark.net/mid_range_cpus.html RAM: 8 GB RAMHeadset: headset, preferably wiredOS: not less than Windows 7 / Ubuntu 16 / macOS 10.14Browser: Chrome only, not less than 106 versionNetwork: not less than 25 Mbps (connecting via Wi-Fi or mobile data is not recommended)Camera: web camera, preferably built-inBrowser: Latest version of Google Chrome should be installed on your personal computer.Task: Watch the video with instructions.Use your phone in order to film our home office set-up. It needs to be a dedicated space, where you can work undisturbed.Show on screen your equipment: laptop or PC, as well as your headset. Show your PC or laptop specifications (from Settings) on screen.Go to www.speedtest.net and run a speed test. Show it on screen.﻿A reviewer will review your submission and if all is good, you will be moved to the next step of the process. ',
                  isCritical: false,
                  so: 36,
                },
                {
                  id: '1805522333681070293',
                  name: 'Day 1 End of the day video',
                  desc: '',
                  isCritical: false,
                  so: 37,
                },
                {
                  id: '1783540047957018463',
                  name: 'Day 2 Pre Live Course',
                  desc: 'You will see a complex example of BQ worflow that leads to sale and will be provided with several scripts that will help you in the future.',
                  isCritical: false,
                  so: 38,
                },
                {
                  id: '510927192901876301',
                  name: 'Day 2 Pre live. Assessment',
                  desc: 'Please make sure you viewed all provided materials. All the questions in this Assessment are based on materials from Day 2 Pre Live course.',
                  isCritical: false,
                  so: 39,
                },
                {
                  id: '1809223301371251743',
                  name: 'Day 2 Pre Live Practical Mission Final',
                  desc: 'Submit your task as instructed below: Log in to your Trainee CMS account - https://cms.asaptickets.com. (Username: use your Mindtickle username, Password: same as Mindtickle password)Access Bonus QueueTake a request from Bonus QueueOpen ProQuoteFind an optionCopy and paste the option in below box, following the exact format requested below:Outbound flight information:Inbound flight information:Total price for all flights:Name(s) of the Operating airline:',
                  isCritical: false,
                  so: 40,
                },
                {
                  id: '1805530380798732453',
                  name: 'Day 2 End of the day video',
                  desc: '',
                  isCritical: false,
                  so: 41,
                },
                {
                  id: '1783556503177738540',
                  name: 'Day 3 Pre live',
                  desc: 'You will get to know the departments you will interact with, will learn about lead management and our lead handling standards.',
                  isCritical: false,
                  so: 42,
                },
                {
                  id: '510933824432010552',
                  name: 'Day 3 Pre live Assessment',
                  desc: 'Please make sure you viewed all provided materials. All the questions in this Assessment are based on materials from Day 3 Pre Live course.',
                  isCritical: false,
                  so: 43,
                },
                {
                  id: '1668577760832375353',
                  name: 'Dreamport Personal Data Protection Training',
                  desc: 'Personal Data is our main asset, which must be protected and well-cared-for! Dreamport clients always presume such scenarios when they entrust their data to us.\tOn the other hand, what would we do if a client\'s credit card data, address or purchase history were leaked on the internet?\tToday, protecting personal data is as important as having a lock on the door of our house.\tOur Data Protection Team has prepared a short and engaging training that explains the basics of "personal data" and how exactly we can protect it.\t\tWatch the video\tSubmit the quiz\tIf you still have any questions or concerns use the Feedback Form at the end of the course to submit.\t\tWe look forward to receiving your answers and feedback!',
                  isCritical: false,
                  so: 44,
                },
                {
                  id: '1805531017988573737',
                  name: 'Day 3 End of the day video',
                  desc: '',
                  isCritical: false,
                  so: 45,
                },
                {
                  id: '1795842646743859793',
                  name: 'DreamPort Pre-Live: Important instructions for next Training Stage',
                  desc: '',
                  isCritical: false,
                  so: 46,
                },
              ],
            },
            {
              status: 'Done',
              count: 2,
              modules: [
                {
                  id: '1784834644105265048',
                  name: 'Introduction to Pre-Live',
                  desc: '',
                  isCritical: false,
                  status: 'Done',
                  result: 'Pass',
                  percentScore: 50.56,
                  score: 910,
                  maxScore: 1800,
                  so: 31,
                },
                {
                  id: '1792504328513597697',
                  name: 'Assessment: Hardware & Software ',
                  desc: 'Welcome to your first video assignment!This is where we get to know you and what do you have to offer!Record your screen and fulfil the required tasks.IMPORTANT: All tasks have to be completed in a single video.You may re-record as many times as you like before your final submission.After the video is recorded and submitted - you may continue the program.A live representative will evaluate your submission.IMPORTANT! If you get a sufficient score in this assignment, you may continue with your program. If you do not reach a sufficient score, your access will be closed. Due to high requirements of our partners in the Travel sector, we\'re looking for skilled candidates who match the language skill requirements, as well as are very good at communication and are available to dedicateTASK 1: (up to 2 min)Introduce yourself: (name, location, work experience, education).1. Why did you decide to become an independent travel manager?2. Do you have any previous experience in Sales or Customer Service fields?3. What are your key professional strengths?4. How would this job help you to achieve your goals?6. How many hours a day and how many days a week would you prefer to work? Are there any full time commitments you currently have, that would not allow you to dedicate yourself as an Independent Travel Manager?7. In order to maximise your income, would you consider to dedicate more time to DreamPort?8. What are your preferred hours of work? Please mention your Time Zone.TASK 2IN THE SAME VIDEO: Read the following script in the most natural way you possibly can, as if you are speaking to a real customer:"That’s a great question, John. Let me tell you more about our company and what we do. You see, we have been in business for more than 20 years and annually we are arranging over 200 thousand flights to our customers both in Economy and Business classes. On top of that we are:Members of the Better Business Bureau with A+, the highest rating.Accredited by Airline Reporting Corporation and American Society of Travel Agents.Moreover, you can check customer reviews at asapticketsreviews.com, There will be links to Trustpilot, Google & Facebook reviews, and more.On top of that, we always can provide you with the airline confirmation number of your reservation before you pay for tickets. You can check at the airline’s official website or you can call them to check if everything is in order.”',
                  isCritical: false,
                  status: 'Done',
                  result: 'Fail',
                  percentScore: 50.56,
                  score: 910,
                  maxScore: 1800,
                  seq: 36,
                },
              ],
            },
          ],
        },
      ],
    },

    VERIFY_PROGRESS_TEST: [
      {
        userId: '1811715108731371520',
        userStatus: true,
        // modulesProgress: [
        //   {
        //     //   id: '465245417156660147',
        //     //   name: 'General Knowledge Test',
        //     completedAt: 'NA',
        //     status: 'Done',
        //     result: 'Pass',
        //     percentScore: 46.67,
        //     score: 700,
        //     maxScore: 1500,
        //     attemptNo: 4,
        //   },
        // ],
      },
    ],

    USER_APP_FOR_CRON_REJECT_PENDING_MODULE: [
      {
        trainingDays: 8,
        id: 4,
        uid: null,
        profileId: 4,
        hrmId: null,
        status: 10,
        photo: null,
        emcId: 126674,
        userTypeId: 1,
        cancelReason: null,
        mntcId: '1811715108731371520',
        mntcCreatedAt: '2024-07-29T20:30:14.000Z',
        mntcFailedAt: null,
        verifyToken: null,
        verifiedAt: null,
        createdAt: '2024-06-26T13:19:16.000Z',
        updatedAt: '2024-08-05T12:58:19.000Z',
        verifyAttemptCount: null,
        loginName: 'sp179',
        source: null,
        emcActive: 1,
        campaign: null,
        medium: null,
        mntcUid: 125,
        provider: 1,
        utmCampaignId: null,
        completedModuleCount: 2,
        mandatoryModuleCompletedAt: null,
        certAwardedAt: null,
        failedModuleInfo: '1765685388983581230',
        passedModuleInfo: null,
      },
    ],
  },

  config: [
    {
      training: {
        waitingDays: 14,
        trainingApplicable: true,
        passScreenText: '',
      },
      assessment: {
        minPassPercentage: 40,
        assessmentIds: [{ ids: [925753, 801910] }, { ids: [802661, 802658] }, { ids: [1001777, 1001776] }],
        legacyAssessmentIds: [823346, 608298, 642599, 695297, 695300, 727752, 727770, 802635],
        assessmentApplicable: true,
        passScreenText: '',
        rejectionDays: 30,
      },
      registration: {
        userTotalAttempt: 2,
        userAttemptDayGap: 90,
        hrTotalAttempt: 3,
        hrAttemptDayGap: 0,
        countries: [19, 69, 105, 140, 165, 236, 158, 49],
        position: [{ id: 1, name: 'Independant Travel Manager' }],
        settingName: 'Independent Travel Manager',
        blackListCities: [
          {
            id: 122338,
            name: 'Cairo',
            cityCode: 'EG-CAAEU',
            state: 'Cairo',
          },
          {
            id: 122279,
            name: 'Giza',
            cityCode: 'EG-GAACN',
            state: 'Giza',
          },
          {
            id: 51496,
            name: 'Chisinau',
            cityCode: 'MD-CAABB',
            state: 'Chișinău Municipality',
          },
        ],
      },
    },
    {
      training: {
        waitingDays: 0,
        trainingApplicable: false,
        passScreenText: '',
      },
      assessment: {
        minPassPercentage: 40,
        assessmentIds: [{ ids: [614804, 974365] }],
        legacyAssessmentIds: [0],
        assessmentApplicable: true,
        passScreenText: '',
        rejectionDays: 7,
      },
      registration: {
        userTotalAttempt: 1,
        userAttemptDayGap: 90,
        hrTotalAttempt: 1,
        hrAttemptDayGap: 0,
        countries: [19, 69, 105, 140, 165, 236, 49, 158],
        position: [
          { id: 3, name: 'Customer Service Consultant' },
          { id: 7, name: 'Customer Service Consultant (OOJO)' },
          {
            id: 9,
            name: 'Dedicated Customer Solutions (Re-Protection) Consultant',
          },
        ],
        settingName: 'Customer Service Consultant',
        // blackListCities: [],
      },
    },
  ],
};

Object.keys(SPV1.MNTC.TRAINING_PERFORMANCE).forEach((key: string) => {
  const moduleStatus: any = SPV1.MNTC.TRAINING_PERFORMANCE[key as keyof object][0]['moduleStatus'];
  moduleStatus.forEach((element: any) => {
    // console.log(element, index);
    element.count = element.modules.length;
  });
});
