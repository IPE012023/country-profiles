import { useSession } from "next-auth/react";
export var useCurrentUser = function () {
    var _a;
    var session = useSession();
    return (_a = session.data) === null || _a === void 0 ? void 0 : _a.user;
};
