# Project: GitFo

A tool for developers to view their GitHub repository activity, tech stack, commit history and heatmaps, insights, analytics and a shareable public dashboard.

## Goal

Build a system to let developers view their repository activity in simplified manner.

## Functional Requirements

Users should be able to:

- Connect GitHub/GitLab account via OAuth
- Import repositories
- View repository analytics
- View commit history
- View commit heatmap
- View contributer statistics
- View repository health
- Generate shareable public dashboard

## Non-Functional Requirements

- Low latency
- Scalable for thousands of repositories
- Secure OAuth authentication
- High availability
- Efficient caching for GitHub API responses

## High-Level Architecture

```H-L arch
Users
  ↓
Frontend (React) 
  ↓
API Server (Node / Express) 
  ↓           ↓         ↓
Supabase    Redis  GitHub / GitLab


API Server
   ↓
Job Queue (Redis / BullMQ)
   ↓
Worker Service
   ↓
Supabase
```

## Database Design

```db-design
Users
-----
id
email
github_id
created_at

Repositories
------------
id
user_id
repo_name
repo_owner
repo_url
external_repo_id
provider (github/gitlab)

RepoStats
---------
repo_id
commit_count
contributors_count
open_issues
pull_requests
stars
forks
last_updated

OAuthTokens
-----------
id
user_id
provider
access_token
refresh_token
expires_at
```

## API Design

```api
POST /auth/signup
POST /auth/login
POST /auth/logout

POST /repos/connect
GET  /repos

GET  /repos/:id/commits
GET  /repos/:id/stats
GET  /repos/:id/heatmap
GET  /repos/:id/contributors
GET /repos/:id/insights

POST /profile/share
```

## OAuth

```oauth
User → Connect GitHub/GitLab
        ↓
OAuth Redirect
        ↓
Exchange code for access token
        ↓
Backend receives tokens
        ↓
Store in Database 
```

## Deployment Architecture

```deploy-arch
Users
  ↓
Vercel (Frontend)
  ↓
AWS EC2 (Backend)
  ↓            ↓
Supabase      Redis 
(PostgreSQL)  (Cache)
  ↓
GitHub API
```

### Deployment Pipeline

```pipeline
GitHub Push
   ↓
CI Pipeline
   ↓
Run tests
   ↓
Docker build
   ↓
Push image
   ↓
Deploy to EC2
```

## Scaling Considerations

- Add Redis caching
- Use load balancer for API servers

## Security Considerations

- OAuth authentication via GitHub / GitLab
- JWT session tokens
- API rate limiting
- Input validation
- Secure storage of OAuth tokens

## Repository Health Score

```feat
Repo_health = 
    commit_frequency +
    PR +
    contributer_activity +
    issue_resolution_time
```

## Background Jobs

- Fetch repository data periodically
- Compute analytics metrics
- Generate commit heatmap
- Update repository health score
