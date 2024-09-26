import { expect, test, describe } from "bun:test"
import { toSlug } from "../src/utils/toSlug"

describe("toSlug function", () =>
    test('toSlug("CecI est UN essai éléments MAJUSCULEs et accents") should return "ceci-est-un-essai-elements-majuscules-et-accents"', () => {
        expect(toSlug("CecI est UN essai éléments MAJUSCULEs et accents")).toBe('ceci-est-un-essai-elements-majuscules-et-accents')
    }))