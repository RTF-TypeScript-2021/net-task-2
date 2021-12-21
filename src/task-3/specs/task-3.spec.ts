import { getCatFact } from "../index";
import { from, tap } from "rxjs";

test("Is a cat fact", (done) => {
    from(getCatFact())
        .pipe(
            tap(x => {
                if(x.length && x.fact){
                    done();
                }
            })
        )
        .subscribe();
}, 14000)
