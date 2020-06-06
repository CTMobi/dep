async function report ({ repos }, repo, sha, state, blockers) {
  let description = ''
  switch (state) {
    case 'success':
      description = 'All dependencies are resolved'
      break

    case 'failure':
      description = `Blocked by ${blockers.map(i => '#' + i).join()}`
      break

    default:
      description = 'Checking dependencies'
      break
  }

  return repos.createStatus({
    context: 'CTMobi dep Checks',
    description,
    ...repo,
    state,
    sha
  })
}

module.exports = report
