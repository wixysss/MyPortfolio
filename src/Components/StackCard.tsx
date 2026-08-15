import '../Styles/StackCard.css'

type Tech = {
    name: string
    level: string
    icon: React.ElementType
    color: string
}
export const StackCard = ({card}:{card: Tech}) => {

    const Icon = card.icon

    return (
        <div className='stack-card'>
            <Icon size={56} color={card.color} className='stack-icon'/>
            <div className='stack-card-hero'>
                <h1>{card.name}</h1>
                <p className='card-level' style={{ color: card.level === 'Pro' ? 'var(--accent)' : 'var(--text-secondary)' }}>{card.level}</p>
            </div>

        </div>
    );
};

