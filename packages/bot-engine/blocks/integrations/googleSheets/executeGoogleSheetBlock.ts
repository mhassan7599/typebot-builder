import {
  GoogleSheetsBlock,
  GoogleSheetsAction,
  SessionState,
} from '@typebot.io/schemas'
import { insertRow } from './insertRow'
import { updateRow } from './updateRow'
import { getRow } from './getRow'
import { ExecuteIntegrationResponse } from '../../../types'

export const executeGoogleSheetBlock = async (
  state: SessionState,
  block: GoogleSheetsBlock
): Promise<ExecuteIntegrationResponse> => {
  const action = block.options.action
  if (!action) return { outgoingEdgeId: block.outgoingEdgeId }
  switch (action) {
    case GoogleSheetsAction.INSERT_ROW:
      return insertRow(state, {
        options: block.options,
        outgoingEdgeId: block.outgoingEdgeId,
      })
    case GoogleSheetsAction.UPDATE_ROW:
      return updateRow(state, {
        options: block.options,
        outgoingEdgeId: block.outgoingEdgeId,
      })
    case GoogleSheetsAction.GET:
      return getRow(state, {
        options: block.options,
        outgoingEdgeId: block.outgoingEdgeId,
      })
  }
}
