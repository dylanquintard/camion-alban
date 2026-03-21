export function isTenantAdminPanelUser(user) {
  return String(user?.activeMembership?.role || "").trim().toUpperCase() === "TENANT_ADMIN";
}
