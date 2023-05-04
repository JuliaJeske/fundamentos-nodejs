
export function buildRoutePath(path) {
  const routerParametersRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(routerParametersRegex, '(?<id>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}