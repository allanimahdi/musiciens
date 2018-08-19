"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.setup = function () {
        kinvey_nativescript_sdk_1.Kinvey.init({
            appKey: BackendService.kinveyAppKey,
            appSecret: BackendService.kinveyAppSecret
        });
    };
    BackendService.kinveyAppKey = "kid_HyqjNN48m";
    BackendService.kinveyAppSecret = "4bc5f60e32ed4c87860ea51e01fe7a44";
    BackendService.kinveyUsername = "alain";
    BackendService.kinveyPassword = "192591";
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUVBQWlEO0FBRWpEO0lBQUE7SUFZQSxDQUFDO0lBTlUsb0JBQUssR0FBWjtRQUNJLGdDQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsTUFBTSxFQUFFLGNBQWMsQ0FBQyxZQUFZO1lBQ25DLFNBQVMsRUFBRSxjQUFjLENBQUMsZUFBZTtTQUM1QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVk0sMkJBQVksR0FBRyxlQUFlLENBQUM7SUFDL0IsOEJBQWUsR0FBRyxrQ0FBa0MsQ0FBQztJQUNyRCw2QkFBYyxHQUFHLE9BQU8sQ0FBQztJQUN6Qiw2QkFBYyxHQUFHLFFBQVEsQ0FBQztJQVFyQyxxQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcbiAgICBzdGF0aWMga2ludmV5QXBwS2V5ID0gXCJraWRfSHlxak5ONDhtXCI7XG4gICAgc3RhdGljIGtpbnZleUFwcFNlY3JldCA9IFwiNGJjNWY2MGUzMmVkNGM4Nzg2MGVhNTFlMDFmZTdhNDRcIjtcbiAgICBzdGF0aWMga2ludmV5VXNlcm5hbWUgPSBcImFsYWluXCI7XG4gICAgc3RhdGljIGtpbnZleVBhc3N3b3JkID0gXCIxOTI1OTFcIjtcblxuICAgIHN0YXRpYyBzZXR1cCgpIHtcbiAgICAgICAgS2ludmV5LmluaXQoe1xuICAgICAgICAgICAgYXBwS2V5OiBCYWNrZW5kU2VydmljZS5raW52ZXlBcHBLZXksXG4gICAgICAgICAgICBhcHBTZWNyZXQ6IEJhY2tlbmRTZXJ2aWNlLmtpbnZleUFwcFNlY3JldFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=