json.extract! server, :id, :name, :owner_id, :invite_code, :is_home
json.channel_ids server.channel_ids

if server.icon.attached?
    json.icon_url url_for(server.icon)
else
    json.icon_url
end