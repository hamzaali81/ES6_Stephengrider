const team = {
    members: ['Jane', 'Bill'],
    temName: 'Super Squad',
    teamSummary: function () {

        return this.members.map((member) => {
            return `${member} is on team ${team.temName}`
        })

    }
}
console.log(team.teamSummary())