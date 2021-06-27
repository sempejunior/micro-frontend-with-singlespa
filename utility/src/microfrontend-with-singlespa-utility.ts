// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}


export function objectFactory() {

    console.log("Teste function");

    return {
        status: 'ok'
    }
}
