import {describe, expect, test} from "bun:test"
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId"

describe("generateRandomNumberId function", () =>
    test('generateRandomNumberId() should return an integer with 6 random digits', () => {
        const res=generateRandomNumberId()
        expect(res).toBeGreaterThanOrEqual(10000)
        expect(res).toBeLessThanOrEqual(999999)
        expect(Number.isInteger(res)).toBe(true)
    }))