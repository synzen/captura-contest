const discordServer = require('../config.json').discordServer

module.exports = function(client, userID) {
  const member = client.guilds.get(discordServer).members.get(userID)
  if (!member) return {clan: 'Guest'}
  let role;
  let councillor = false
  if (member.roles.find('name', 'Tempus')) role = 'Deus Ex Tempus'
  else if (member.roles.find('name', 'Incendium')) role = 'Deus Ex Incendium'
  else role = 'Guest'

  if (member.roles.find('name', 'Councillor')) councillor = true

  return {clan: role, councillor: councillor}
}
