import { from, tap } from "rxjs";
import { isUserExist } from "../index";


test('Is user exist', (ds) => {
    from(isUserExist('daleunixal'))
        .pipe(
            tap((isExist: boolean) => {
                if (isExist){
                    ds()
                }
            })
        ).subscribe()
}, 20000)


test('is user unexist', (ds) => {
    from(isUserExist('dasdq342sdft'))
        .pipe(
            tap((isExist: boolean) => {
                if (!isExist){
                    ds()
                }
            })
        ).subscribe()
})
