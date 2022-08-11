function getComputerChoice()
{
    let selection = Math.random();
    if (selection < 0.34)
    {
        return "Rock";
    }
    else if (selection >= 0.34 && selection < 0.67)
    {
        return "Paper";
    }
    else
    {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection)
{
    let lowerPlayerSelection = playerSelection.toLowerCase();
    switch(computerSelection)
    {
        case "Rock":
            if (lowerPlayerSelection === "rock")
            {
                alert("Draw.")
            }
            else if (lowerPlayerSelection === "paper")
            {
                alert("You win!")
            }
            else
            {
                alert("Computer wins!")
            }
            break;
        case "Paper":
            if (lowerPlayerSelection === "rock")
            {
                alert("Computer wins!")
            }
            else if (lowerPlayerSelection === "paper")
            {
                alert("Draw.")
            }
            else
            {
                alert("You win!")
            }
            break;
        default:
            if (lowerPlayerSelection === "rock")
            {
                alert("You win!")
            }
            else if (lowerPlayerSelection === "paper")
            {
                alert("Computer wins!")
            }
            else
            {
                alert("Draw.")
            }
            break;
    }
}

function game()
{
    for (let index = 0; index < 5; index++)
    {
        let playerSelection = prompt("Please enter your choice: Rock, Paper, Scissors.")
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
    }   
}

game();