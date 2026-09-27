# xAPI Statement Design Checklist

## Start with the decision
- What question must the data answer?
- Who will act on the answer?
- What observable event is valid evidence?

## Define the statement contract
- Actor uses a stable, privacy-conscious identity.
- Verb uses the approved identifier and intended meaning.
- Object uses a persistent activity identifier.
- Result distinguishes completion, success, score, response, and duration.
- Context connects the event to its registration, parent, platform, or team.
- Timestamp represents when the event occurred.

## Validate the full path
- Trigger the event once in the experience.
- Confirm the request payload and response.
- Retrieve the stored statement from the LRS.
- Confirm transformation and query rules recognize it.
- Verify the correct result in the report or dashboard.
- Test a negative case and one realistic edge case.

## Govern the contract
- Link representative statements to the requirement.
- Record the owner, version, effective date, and change history.
- Add an integration test for critical identifiers.
- Give temporary mappings an owner and retirement date.

Created by Daniel Gutensohn · Updated September 2026
