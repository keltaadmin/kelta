export const PERMISSIONS = {
  MEMBER: {
    READ: 'member.read',
    CREATE: 'member.create',
    UPDATE: 'member.update',
    DELETE: 'member.delete',
    APPROVE: 'member.approve',
    VERIFY: 'member.verify',
    EXPORT: 'member.export',
  },

  APPLICATION: {
    SUBMIT: 'application.submit',
    REVIEW: 'application.review',
    APPROVE: 'application.approve',
    REJECT: 'application.reject',
    ASSIGN: 'application.assign',
  },

  DISTRICT: {
    READ: 'district.read',
    CREATE: 'district.create',
    UPDATE: 'district.update',
    DELETE: 'district.delete',
    MANAGE: 'district.manage',
  },

  COMMITTEE: {
    READ: 'committee.read',
    CREATE: 'committee.create',
    UPDATE: 'committee.update',
    DELETE: 'committee.delete',
    MANAGE: 'committee.manage',
  },

  MEETING: {
    READ: 'meeting.read',
    CREATE: 'meeting.create',
    UPDATE: 'meeting.update',
    DELETE: 'meeting.delete',
    MANAGE: 'meeting.manage',
  },

  EVENT: {
    READ: 'event.read',
    CREATE: 'event.create',
    UPDATE: 'event.update',
    DELETE: 'event.delete',
    PUBLISH: 'event.publish',
  },

  PAYMENT: {
    READ: 'payment.read',
    CREATE: 'payment.create',
    VERIFY: 'payment.verify',
    APPROVE: 'payment.approve',
    REFUND: 'payment.refund',
  },

  CERTIFICATE: {
    READ: 'certificate.read',
    GENERATE: 'certificate.generate',
    REVOKE: 'certificate.revoke',
    VERIFY: 'certificate.verify',
  },

  DOCUMENT: {
    READ: 'document.read',
    CREATE: 'document.create',
    UPDATE: 'document.update',
    DELETE: 'document.delete',
    DOWNLOAD: 'document.download',
  },

  REPORT: {
    VIEW: 'report.view',
    EXPORT: 'report.export',
  },

  NOTIFICATION: {
    READ: 'notification.read',
    SEND: 'notification.send',
    MANAGE: 'notification.manage',
  },

  CMS: {
    READ: 'cms.read',
    CREATE: 'cms.create',
    UPDATE: 'cms.update',
    DELETE: 'cms.delete',
    PUBLISH: 'cms.publish',
  },

  USER: {
    READ: 'user.read',
    CREATE: 'user.create',
    UPDATE: 'user.update',
    DELETE: 'user.delete',
    MANAGE: 'user.manage',
  },

  ROLE: {
    READ: 'role.read',
    CREATE: 'role.create',
    UPDATE: 'role.update',
    DELETE: 'role.delete',
    ASSIGN: 'role.assign',
  },

  SETTINGS: {
    READ: 'settings.read',
    UPDATE: 'settings.update',
    MANAGE: 'settings.manage',
  },

  AUDIT: {
    VIEW: 'audit.view',
    EXPORT: 'audit.export',
  },
} as const;

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS][keyof (typeof PERMISSIONS)[keyof typeof PERMISSIONS]];
