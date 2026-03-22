CREATE TABLE accommodations (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    guests INT,
    bedrooms INT,
    beds INT,
    bathrooms INT,
    price_per_night DECIMAL(10, 2),
    country VARCHAR(100),
    city VARCHAR(100),
    postal_code VARCHAR(20),
    street VARCHAR(255),
    description TEXT,
    pets_allowed BOOLEAN
);

CREATE TABLE accommodation_amenities (
    accommodation_id BIGINT NOT NULL REFERENCES accommodations(id) ON DELETE CASCADE,
    amenity VARCHAR(100) NOT NULL
);

CREATE TABLE accommodation_images (
    accommodation_id BIGINT NOT NULL REFERENCES accommodations(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL
);
