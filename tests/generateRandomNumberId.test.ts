import {describe, expect, test} from "bun:test"
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId"

describe("generateRandomNumberId function", () =>
    test('generateRandomNumberId() should return an integer with 6 random digits', () => {
        for(let i=0;i<200;i++){
            const res=generateRandomNumberId()
            expect(res).toBeGreaterThanOrEqual(100000)
            expect(res).toBeLessThanOrEqual(999999)
            expect(Number.isInteger(res)).toBe(true)
        }
    }))