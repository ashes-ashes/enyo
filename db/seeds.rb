# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    username: 'Zeus',
    email: 'zeus@olympus.io',
    password: 'imtheking'
)

User.create(
    username: 'Hades',
    email: 'hades@elysium.org',
    password: 'plouton'
)

User.create(
    username: 'hermes',
    email: 'hermes@olympus.io',
    password: 'psychopomp'
)


Server.create(
    name: "Olympus",
    owner_id: 1
)

Server.create(
    name: "Asphodel",
    owner_id: 2
)

3.times do |i|
    ServerMembership.create(
        server_id: 1,
        user_id: i+1
    )
end

ServerMembership.create(
    server_id: 2,
    user_id: 2
)

ServerMembership.create(
    server_id: 2,
    user_id: 3
)