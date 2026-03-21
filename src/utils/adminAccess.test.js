import { isTenantAdminPanelUser } from "./adminAccess";

describe("adminAccess", () => {
  it("accepts only TENANT_ADMIN role", () => {
    expect(isTenantAdminPanelUser({ activeMembership: { role: "TENANT_ADMIN" } })).toBe(true);
    expect(isTenantAdminPanelUser({ activeMembership: { role: " tenant_admin " } })).toBe(true);
  });

  it("rejects legacy or non-admin roles", () => {
    expect(isTenantAdminPanelUser({ activeMembership: { role: "ADMIN" } })).toBe(false);
    expect(isTenantAdminPanelUser({ activeMembership: { role: "SUPER_ADMIN" } })).toBe(false);
    expect(isTenantAdminPanelUser({ activeMembership: { role: "OWNER" } })).toBe(false);
    expect(isTenantAdminPanelUser({ activeMembership: { role: "CUSTOMER" } })).toBe(false);
    expect(isTenantAdminPanelUser({ activeMembership: { role: "" } })).toBe(false);
    expect(isTenantAdminPanelUser({})).toBe(false);
    expect(isTenantAdminPanelUser(null)).toBe(false);
  });
});