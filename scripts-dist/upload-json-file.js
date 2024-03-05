var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
var prisma = new PrismaClient();
function uploadData() {
    return __awaiter(this, void 0, void 0, function () {
        var dataFilePath, jsonData, Countries, Products, Indexes, VATs, _i, Countries_1, country, _a, Products_1, product, _b, Indexes_1, index, _c, VATs_1, vat;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    dataFilePath = path.join("C:\\Users\\JensHerold\\OneDrive - IPE Institut für Politikevaluation\\Dokumente\\Taskforce\\country_profiles\\data", 'south-korea.json');
                    jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
                    Countries = jsonData.Countries, Products = jsonData.Products, Indexes = jsonData.Indexes, VATs = jsonData.VATs;
                    _i = 0, Countries_1 = Countries;
                    _d.label = 1;
                case 1:
                    if (!(_i < Countries_1.length)) return [3 /*break*/, 4];
                    country = Countries_1[_i];
                    return [4 /*yield*/, prisma.country.create({
                            data: country,
                        })];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    _a = 0, Products_1 = Products;
                    _d.label = 5;
                case 5:
                    if (!(_a < Products_1.length)) return [3 /*break*/, 8];
                    product = Products_1[_a];
                    return [4 /*yield*/, prisma.product.create({
                            data: __assign(__assign({}, product), { yearlyData: {
                                    create: product.yearlyData,
                                } }),
                        })];
                case 6:
                    _d.sent();
                    _d.label = 7;
                case 7:
                    _a++;
                    return [3 /*break*/, 5];
                case 8:
                    _b = 0, Indexes_1 = Indexes;
                    _d.label = 9;
                case 9:
                    if (!(_b < Indexes_1.length)) return [3 /*break*/, 12];
                    index = Indexes_1[_b];
                    return [4 /*yield*/, prisma.index.create({
                            data: __assign(__assign({}, index), { yearlyData: {
                                    create: index.yearlyData,
                                } }),
                        })];
                case 10:
                    _d.sent();
                    _d.label = 11;
                case 11:
                    _b++;
                    return [3 /*break*/, 9];
                case 12:
                    _c = 0, VATs_1 = VATs;
                    _d.label = 13;
                case 13:
                    if (!(_c < VATs_1.length)) return [3 /*break*/, 16];
                    vat = VATs_1[_c];
                    return [4 /*yield*/, prisma.vAT.create({
                            data: __assign(__assign({}, vat), { yearlyVATData: {
                                    create: vat.yearlyVATData,
                                } }),
                        })];
                case 14:
                    _d.sent();
                    _d.label = 15;
                case 15:
                    _c++;
                    return [3 /*break*/, 13];
                case 16: return [2 /*return*/];
            }
        });
    });
}
uploadData()
    .then(function () {
    console.log('Data upload complete.');
})
    .catch(function (e) {
    console.error('Error uploading data:', e);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
