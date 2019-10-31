# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


zeus = User.create(
    username: 'Zeus',
    email: 'zeus@olympus.io',
    password: 'imtheking'
)

hades = User.create(
    username: 'Hades',
    email: 'hades@elysium.org',
    password: 'plouton'
)

hermes = User.create(
    username: 'hermes',
    email: 'hermes@olympus.io',
    password: 'psychopomp'
)

hera = User.create(
    username: 'Hera',
    email: 'hera@olympus.io',
    password: 'antiio'
)

apollo = User.create(
    username: 'Apollo',
    email: 'apollo@olympus.io',
    password: 'igotthecow'
)

artemis = User.create(
    username: 'Artemis',
    email: 'artemis@olympus.io',
    password: 'ishotthestag'
)

prometheus = User.create(
    username: 'prometheus',
    email: 'prometheus@gaia.net',
    password: 'firetoman'
)

tiresias = User.create(
    username: 'Tiresias',
    email: 'seer@gaia.net',
    password: 'seesall'
)

heracles = User.create(
    username: 'Heracles',
    email: 'heracles@gaia.net',
    password: 'twelvelabors'
)

zeus.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/zeus.jpg'), filename: 'zeus.jpg')
hades.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/hades.jpg'), filename: 'hades.jpg')
hera.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/hera.jpg'), filename: 'hera.jpg')
hermes.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/hermes.jpg'), filename: 'hermes.jpg')
apollo.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/apollo.jpg'), filename: 'apollo.jpg')
artemis.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/artemis.jpg'), filename: 'artemis.jpg')

prometheus.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/prometheus.jpg'), filename: 'prometheus.jpg')

tiresias.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/tiresias.jpg'), filename: 'tiresias.jpg')
heracles.avatar.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/heracles.jpg'), filename: 'heracles.jpg')

olympus = Server.create(
    name: "Olympus",
    owner_id: 1
)

olympus.icon.attach(io: open('https://enyo-seed.s3-us-west-1.amazonaws.com/olympus.png'), filename: 'olympus.png')

9.times do |i|
    ServerMembership.create(
        server_id: 1,
        user_id: i+1
    )
end

throneroom = Channel.create(
    name: 'throne room'
)

chariotparking = Channel.create(
    name: 'chariot parking'
)

thatonerock = Channel.create(
    name: 'that one rock'
)

3.times do |i|
    ChannelServer.create(
        server_id: 1,
        channel_id: i+2
    )
end

Message.create([{
    body: 'SPEAK YOUR REQUESTS TO THE KING OF THE GODS.',
    author_id: 1,
    channel_id: 2,
}, {
    body: 'I\'ll just be over here. -_-',
    author_id: 4,
    channel_id: 2,
}, {
    body: 'HUSH, YOU.',
    author_id: 1,
    channel_id: 2,
}, {
    body: 'so...humans are cold',
    author_id: 7,
    channel_id: 2,
}, {
    body: 'SO WHAT.',
    author_id: 1,
    channel_id: 2,
}, {
    body: 'can i bring them some fire or something',
    author_id: 7,
    channel_id: 2,
}, {
    body: 'OBVIOUSLY NOT.',
    author_id: 1,
    channel_id: 2
}, {
    body: 'WHAT, DO YOU THINK FIRE GROWS ON TREES.',
    author_id: 1,
    channel_id: 2
}, {
    body: 'i mean...it comes from trees',
    author_id: 7,
    channel_id: 2
}, {
    body: 'NEXT.',
    author_id: 1,
    channel_id: 2
}])

eagleconvo = [{
    body: '*CHOMP*',
    author_id: 1,
    nick: '🦅'
}, {
    body: 'ow',
    author_id: 7
}, {
    body: '*CHOMP*',
    author_id: 1,
    nick: '🦅'
}, {
    body: 'ow',
    author_id: 7,
}, {
    body: '*CHOMP*',
    author_id: 1,
    nick: '🦅'
}, {
    body: 'ow',
    author_id: 7
}, {
    body: '*CHOMP*',
    author_id: 1,
    nick: '🦅'
}, {
    body: 'ow',
    author_id: 7
},  {
    body: 'stop!!!!',
    author_id: 7
}, {
    body: 'THAT\'S WHAT YOU GET.',
    author_id: 1
}, {
    body: 'oh ffs',
    author_id: 9
}, {
    body: 'leave him alone dad',
    author_id: 9
}, {
    body: 'RUIN MY FUN, WHY DON\'T YOU.',
    author_id: 1
}].each { |message| message['channel_id'] = 4}

Message.create(eagleconvo)

chariotconvo = [{
    body: 'What do you even do here?',
    author_id: '6'
}, {
    body: 'park my chariot?',
    author_id: '5'
}, {
    body: 'play the lyre?',
    author_id: '5'
}, {
    body: 'send prophecies?',
    author_id: '5'
}, {
    body: 'flay satyrs?',
    author_id: '5'
}, {
    body: 'hide stolen cows?',
    author_id: '5'
}, {
    body: '🙄',
    author_id: '6'
}, {
    body: 'Those aren\'t even the best kind of ungulate.',
    author_id: '6'
}].each { |message| message['channel_id'] = 3 }

Message.create(chariotconvo)

Channel.find_by(id: 1).delete