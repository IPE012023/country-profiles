import { useSession } from "next-auth/react";
export var useCurrentRole = function () {
    var _a, _b;
    var session = useSession();
    return (_b = (_a = session.data) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.role;
};
