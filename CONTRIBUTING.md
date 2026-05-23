# Contributing to Aidtrack

Welcome to the Aidtrack team! To ensure a high standard of code quality and security, we follow a strict branching and Pull Request strategy.

## 🌳 Branching Strategy (GitFlow Lite)

We use two primary permanent branches:

1. **`main`**: This is the **production-ready** branch. It is highly protected. Code in this branch must always be deployable.
2. **`develop`**: This is the active **integration branch**. All new features and bug fixes are merged here first.

### Creating a Branch
Never commit directly to `main` or `develop`. Instead, create a temporary branch based on the type of work you are doing:

* **Feature Branches**: For all new features and non-urgent bug fixes.
  * Must branch from `develop`.
  * Format: `feature/<short-description>` (e.g., `feature/login-page`)
  * When done, open a Pull Request against `develop`.
  
* **Hotfix Branches**: For urgent production bugs.
  * Must branch from `main`.
  * Format: `hotfix/<short-description>` (e.g., `hotfix/database-connection-error`)
  * When done, open Pull Requests against **both** `main` and `develop`.

## 🛡️ Pull Request Rules

Before any code can be merged into `main` or `develop`, the following conditions must be met:

1. **DevSecOps Pipeline Must Pass**: Our GitHub Actions workflow will automatically scan your Pull Request. 
   * **SonarCloud** will check your code for bugs and vulnerabilities.
   * **Trivy** will scan the built Docker container for vulnerable dependencies.
   * If any of these checks fail, your PR will be **blocked** from merging until the vulnerabilities are fixed.
2. **Peer Review**: Ensure at least one other developer reviews and approves your Pull Request.

## 🚀 Getting Started

To start working on a new feature:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# ... write your code, commit, and push ...
git push origin feature/your-feature-name
```
Then, go to GitHub and open a Pull Request against the `develop` branch.
