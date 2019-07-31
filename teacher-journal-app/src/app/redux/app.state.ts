import { State, Action, StateContext } from '@ngxs/store';
import { AddStudent } from './actions/student-table.actions';
import { IStudent } from '../common/entities/Student';

export interface AppStateModel {
    students: IStudent[];
}

@State<AppStateModel>()

export class AppState {
    name: 'app',
    defaults: {
        students: [],
    }

    @Action(AddStudent)
    addUser({ patchSate }: StateContext<AppStateModel>, { payload }: AddStudent){
        patchState({ students: payload ]})
    }
}
