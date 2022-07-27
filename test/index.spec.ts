/* eslint-env mocha */

import { expect } from 'aegir/chai'
import { Uint8ArrayList } from 'uint8arraylist'
import accessor from '../src/index.js'

describe('accessor', () => {
  describe('get', () => {
    it('should access values in a Uint8Array', () => {
      const data = Uint8Array.from([0, 1, 2, 3, 4])
      const access = accessor(data)

      for (let i = 0; i < 5; i++) {
        expect(access.get(i)).to.equal(i)
      }
    })

    it('should access values in a Uint8ArrayList', () => {
      const data = new Uint8ArrayList(
        Uint8Array.from([0, 1, 2]),
        Uint8Array.from([3, 4])
      )
      const access = accessor(data)

      for (let i = 0; i < 5; i++) {
        expect(access.get(i)).to.equal(i)
      }
    })
  })

  describe('set', () => {
    it('should update values in a Uint8Array', () => {
      const data = Uint8Array.from([0, 0, 0, 0, 0])
      const access = accessor(data)

      for (let i = 0; i < 5; i++) {
        access.set(i, i)
        expect(access.get(i)).to.equal(i)
      }
    })

    it('should update values in a Uint8ArrayList', () => {
      const data = new Uint8ArrayList(
        Uint8Array.from([0, 0, 0]),
        Uint8Array.from([0, 0])
      )
      const access = accessor(data)

      for (let i = 0; i < 5; i++) {
        access.set(i, i)
        expect(access.get(i)).to.equal(i)
      }
    })
  })
})
