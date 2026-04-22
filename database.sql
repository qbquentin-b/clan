-- Database Schema for Jeu de Clans

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CLANS Table
CREATE TABLE clans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
    crest_url TEXT,
    banner_url TEXT,
    crystals_pool INTEGER DEFAULT 0 CHECK (crystals_pool >= 0),
    level INTEGER DEFAULT 1,
    tier TEXT DEFAULT 'Bronze',
    power_score INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- USERS Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    crystals INTEGER DEFAULT 0 CHECK (crystals >= 0),
    war_points INTEGER DEFAULT 0,
    clan_id UUID REFERENCES clans(id) ON DELETE SET NULL,
    clan_rank TEXT CHECK (clan_rank IN ('member', 'veteran', 'officer', 'leader')),
    level INTEGER DEFAULT 1,
    global_rank INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- DROPS Table
CREATE TABLE drops (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL CHECK (type IN ('crystals', 'resource', 'weapon_plan', 'boost')),
    value INTEGER NOT NULL,
    max_claims INTEGER NOT NULL,
    current_claims INTEGER DEFAULT 0 CHECK (current_claims <= max_claims),
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- CLAIMS Table
CREATE TABLE claims (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    drop_id UUID REFERENCES drops(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(drop_id, user_id)
);

-- RESOURCES Table
CREATE TABLE resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    amount INTEGER DEFAULT 0 CHECK (amount >= 0),
    UNIQUE(user_id, type)
);

-- WEAPONS Table
CREATE TABLE weapons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    clan_id UUID REFERENCES clans(id) ON DELETE SET NULL,
    type TEXT NOT NULL,
    stats JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- WARS Table
CREATE TABLE wars (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clan_a_id UUID REFERENCES clans(id),
    clan_b_id UUID REFERENCES clans(id),
    scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'finished')),
    winner_id UUID REFERENCES clans(id),
    score_a INTEGER DEFAULT 0,
    score_b INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- MISSIONS Table
CREATE TABLE missions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    reward_crystals INTEGER DEFAULT 0,
    clan_id UUID REFERENCES clans(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'submitted', 'validated', 'rejected')),
    proof_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- BETS Table
CREATE TABLE bets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    event_id TEXT NOT NULL,
    amount INTEGER NOT NULL CHECK (amount > 0),
    prediction TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'won', 'lost', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INDEXES
CREATE INDEX idx_users_clan_id ON users(clan_id);
CREATE INDEX idx_claims_drop_id ON claims(drop_id);
CREATE INDEX idx_claims_user_id ON claims(user_id);
CREATE INDEX idx_wars_status ON wars(status);
CREATE INDEX idx_drops_expires_at ON drops(expires_at);
