-- DELETE FROM post where 1=1;
-- DELETE FROM user where 1=1;

INSERT INTO user (username, email, password) VALUES
('bcamp', 'bcamp@gmail.com', '1234'),
('ccamp', 'ccamp@gmail.com', 'password'),
('lcamp', 'lcamp@gmail.com', '9876');

INSERT INTO post (title, post_url, user_id, created_at, updated_at) VALUES
('yo yo', 'www.yoyo.com', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hey man hows it going', 'www.blahfb.com', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('what the heck', 'www.whattheheck.com', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Yessir', 'www.yay.com', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


