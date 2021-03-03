import { cond, act, and } from '@barajs/core'
import { Formula, p } from '@barajs/formula'
import {
  whenComponentEmit,
  kindEq,
  propNameEq as eventEq,
} from '@bit/barajs.portions.react'

export const whenBookSelected = (formulas: Formula[]) =>
  whenComponentEmit(
    cond(and(kindEq('book'), eventEq('onPress')), act(p(...formulas))),
  )

export const whenChapterSelected = (formulas: Formula[]) =>
  whenComponentEmit(
    cond(and(kindEq('chapter'), eventEq('onPress')), act(p(...formulas))),
  )

export const whenBookDeselected = (formulas: Formula[]) =>
  whenComponentEmit(
    cond(and(kindEq('back'), eventEq('onPress')), act(p(...formulas))),
  )
