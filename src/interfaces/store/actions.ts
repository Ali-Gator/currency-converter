import { AsyncThunk } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

export enum ActionStatus {
  pending = 'pending',
  rejected = 'rejected',
  fulfilled = 'fulfilled'
}

export type PendingAction = ReturnType<GenericAsyncThunk[ActionStatus.pending]>
export type RejectedAction = ReturnType<GenericAsyncThunk[ActionStatus.rejected]>
export type FulfilledAction = ReturnType<GenericAsyncThunk[ActionStatus.fulfilled]>
