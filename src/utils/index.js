export const xp = function(promise) {
  return promise.then(res => [null, res]).catch(err => err)
}
