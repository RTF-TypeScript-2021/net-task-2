import { getCatFact } from "../../task-3";
import { CatFactResponseModel, TranslateResponseModel } from "../../task-2";
import { from, switchMap, tap } from "rxjs";
import { translateCatFact } from "../index";

test("Is ru", (done) =>{
    from(getCatFact()).pipe(
        switchMap((value: CatFactResponseModel) => {
            return from(translateCatFact(value))
        }),
        tap((value: TranslateResponseModel) => {
            const regex = value.translatedText.match(/[\wа-я]+/ig)
            if(regex.length){
                done()
            }
        })
    )
        .subscribe()

}, 24000)
