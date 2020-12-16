export const ObjectionHelper = {
  users: (result: any): any => {
    const { password, ...resultWithoutPassword } = result
    return Object.assign({}, resultWithoutPassword)
  }
}
